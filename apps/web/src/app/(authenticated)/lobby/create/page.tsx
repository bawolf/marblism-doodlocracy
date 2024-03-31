'use client'

import React, { useState } from 'react'
import { Button, Form, Input, Typography, Row, Col, Card } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateGameLobbyPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleCreateLobby = async (values: { lobbyName: string }) => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to create a lobby.', {
        variant: 'error',
      })
      return
    }

    try {
      const lobby = await Api.Lobby.createOneByHostUserId(userId, {
        uniqueLink: values.lobbyName,
      })
      enqueueSnackbar('Lobby created successfully!', { variant: 'success' })
      router.push(`/lobby/${lobby.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to create lobby. Please try again.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col xs={24} sm={12}>
          <Card>
            <Title level={2}>Create a New Game Lobby</Title>
            <Text>
              Create a unique environment for you and your friends to enjoy
              Doodlocracy.
            </Text>
            <Form form={form} layout="vertical" onFinish={handleCreateLobby}>
              <Form.Item
                name="lobbyName"
                label="Lobby Name"
                rules={[
                  { required: true, message: 'Please input the lobby name!' },
                ]}
              >
                <Input
                  prefix={<PlusOutlined />}
                  placeholder="Enter a unique name for your lobby"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Create Lobby
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
