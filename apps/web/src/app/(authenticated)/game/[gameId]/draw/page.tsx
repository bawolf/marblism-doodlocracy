'use client'

import { useEffect, useState } from 'react'
import { Button, Col, Row, Typography, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DrawPromptPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { gameId } = params
  const { user, isAuthenticated } = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [prompts, setPrompts] = useState([])
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    if (!isAuthenticated) {
      enqueueSnackbar('You must be logged in to access this page', {
        variant: 'error',
      })
      router.push('/')
    }
    const fetchPrompts = async () => {
      try {
        const promptsFound = await Api.Prompt.findManyByGameId(gameId, {
          includes: ['game', 'game.prompts'],
        })
        setPrompts(promptsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch prompts', { variant: 'error' })
      }
    }
    fetchPrompts()
  }, [gameId, isAuthenticated, router])

  const handleUpload = async options => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      setFileList(fileList => [...fileList, { url: url, status: 'done' }])
      enqueueSnackbar('Upload successful', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Upload failed', { variant: 'error' })
    }
  }

  const handleSubmitDrawing = async () => {
    if (fileList.length === 0 || !prompts[0]) {
      enqueueSnackbar('Please upload a drawing first', { variant: 'error' })
      return
    }
    try {
      await Api.Drawing.createOneByPromptId(prompts[0].id, {
        imageDataUrl: fileList[0].url,
        userId: user?.id,
      })
      enqueueSnackbar('Drawing submitted successfully', { variant: 'success' })
      router.push(`/game/${gameId}/view-drawings`)
    } catch (error) {
      enqueueSnackbar('Failed to submit drawing', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Draw Prompt</Title>
      <Text>Draw something based on the prompt given below. Be creative!</Text>
      {prompts.length > 0 ? (
        <Row gutter={[16, 16]} justify="center">
          <Col span={24}>
            <Title level={4}>{prompts[0].text}</Title>
            <Text type="secondary">
              Created at: {dayjs(prompts[0].dateCreated).format('DD/MM/YYYY')}
            </Text>
          </Col>
          <Col span={24}>
            <Upload
              fileList={fileList}
              customRequest={handleUpload}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload Drawing</Button>
            </Upload>
          </Col>
          <Col span={24}>
            <Button type="primary" onClick={handleSubmitDrawing}>
              Submit Drawing
            </Button>
          </Col>
        </Row>
      ) : (
        <Text>Loading prompts...</Text>
      )}
    </PageLayout>
  )
}
