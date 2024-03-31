'use client'

import React, { useState } from 'react'
import { Typography, Input, Button, Row, Col, Space } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function JoinGameLobbyPage() {
  const router = useRouter()
  const { lobbyId } = useParams<any>()
  const { user } = useAuthentication()
  const userId = user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)

  const joinLobby = async () => {
    if (!userId || !lobbyId) {
      enqueueSnackbar('You must be logged in to join a lobby.', {
        variant: 'error',
      })
      return
    }

    setIsLoading(true)
    try {
      await Api.UserLobby.createOneByLobbyId(lobbyId, { userId })
      enqueueSnackbar('Successfully joined the lobby!', { variant: 'success' })
      router.push(`/lobby/${lobbyId}`)
    } catch (error) {
      enqueueSnackbar('Failed to join the lobby. Please try again.', {
        variant: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>
              <UserAddOutlined /> Join Game Lobby
            </Title>
            <Paragraph>
              Enter the lobby ID you wish to join. Make sure you have the
              correct ID from your host.
            </Paragraph>
            <Input placeholder="Lobby ID" value={lobbyId} disabled />
            <Button
              type="primary"
              onClick={joinLobby}
              loading={isLoading}
              block
            >
              Join Lobby
            </Button>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
