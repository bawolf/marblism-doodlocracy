'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Input, Row, Typography } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GuessDrawingPromptPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [drawing, setDrawing] = useState<any>(null)
  const [guess, setGuess] = useState<string>('')

  useEffect(() => {
    if (params.drawingId) {
      Api.Drawing.findOne(params.drawingId, { includes: ['prompt'] })
        .then(setDrawing)
        .catch(() =>
          enqueueSnackbar('Failed to load drawing', { variant: 'error' }),
        )
    }
  }, [params.drawingId])

  const handleGuessSubmit = async () => {
    if (!guess.trim()) {
      enqueueSnackbar('Please enter your guess', { variant: 'info' })
      return
    }

    try {
      await Api.Guess.createOneByDrawingId(drawing.id, { text: guess, userId })
      enqueueSnackbar('Guess submitted successfully', { variant: 'success' })
      router.push(`/game/${drawing.prompt.gameId}/results`)
    } catch (error) {
      enqueueSnackbar('Failed to submit guess', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Guess the Prompt</Title>
      <Text>Try to guess the original prompt of the drawing below.</Text>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={12}>
          <Card
            hoverable
            cover={<img alt="drawing" src={drawing?.imageDataUrl} />}
            actions={[
              <Button
                type="primary"
                icon={<QuestionCircleOutlined />}
                onClick={handleGuessSubmit}
              >
                Submit Guess
              </Button>,
            ]}
          >
            <Form layout="vertical">
              <Form.Item label="Your Guess">
                <Input
                  value={guess}
                  onChange={e => setGuess(e.target.value)}
                  placeholder="Type your guess here"
                />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      {drawing && (
        <Text type="secondary" style={{ display: 'block', marginTop: '10px' }}>
          Drawing submitted on{' '}
          {dayjs(drawing.dateCreated).format('MMMM D, YYYY')}
        </Text>
      )}
    </PageLayout>
  )
}
