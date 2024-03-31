'use client'

import { useEffect, useState } from 'react'
import { Col, Row, Card, Typography, Spin } from 'antd'
import { PictureOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ViewDrawingsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [drawings, setDrawings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to view this page', {
        variant: 'error',
      })
      router.push('/')
      return
    }

    const fetchDrawings = async () => {
      try {
        const drawingsFound = await Api.Drawing.findMany({
          includes: ['prompt', 'user'],
        })
        setDrawings(drawingsFound)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch drawings', { variant: 'error' })
        setLoading(false)
      }
    }

    fetchDrawings()
  }, [userId, router])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Gallery of Drawings</Title>
      <Text>
        Explore the creativity and guess the original prompts of the drawings
        submitted by participants.
      </Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {drawings?.map(drawing => (
          <Col key={drawing.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              cover={<img alt="drawing" src={drawing.imageDataUrl} />}
              actions={[
                <PictureOutlined
                  key="view"
                  onClick={() => router.push(`/drawing/${drawing.id}/guess`)}
                />,
              ]}
            >
              <Card.Meta
                title={`Artist: ${drawing.user?.name}`}
                description={`Prompt: ${drawing.prompt?.text}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
