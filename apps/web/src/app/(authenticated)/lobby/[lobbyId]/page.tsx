'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Avatar, List, Button, Space, Grid } from 'antd'
import {
  UserOutlined,
  TeamOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { useBreakpoint } = Grid
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GameLobbyPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const screens = useBreakpoint()
  const [lobby, setLobby] = useState<Model.Lobby>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params.lobbyId) {
      enqueueSnackbar('Lobby ID is missing', { variant: 'error' })
      router.push('/')
      return
    }

    const fetchLobbyDetails = async () => {
      try {
        const lobbyDetails = await Api.Lobby.findOne(params.lobbyId, {
          includes: ['hostUser', 'userLobbys', 'userLobbys.user'],
        })
        setLobby(lobbyDetails)
      } catch (error) {
        enqueueSnackbar('Failed to fetch lobby details', { variant: 'error' })
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchLobbyDetails()
  }, [params.lobbyId, router])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Game Lobby</Title>
      <Text>
        This is the central hub for players to prepare for the game, view lobby
        details, and interact with other players.
      </Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Card>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Title level={4}>
              <TeamOutlined /> Lobby Host: {lobby?.hostUser?.name || 'Unknown'}
            </Title>
            <Text>
              <ClockCircleOutlined /> Created At:{' '}
              {dayjs(lobby?.dateCreated).format('DD/MM/YYYY HH:mm')}
            </Text>
            <List
              header={<div>Players in Lobby</div>}
              bordered
              dataSource={lobby?.userLobbys}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={item.user?.pictureUrl || undefined}
                        icon={<UserOutlined />}
                      />
                    }
                    title={item.user?.name || 'Anonymous Player'}
                    description={`Joined at ${dayjs(item.dateCreated).format('DD/MM/YYYY HH:mm')}`}
                  />
                </List.Item>
              )}
            />
            <Button
              type="primary"
              onClick={() => router.push(`/game/${lobby?.id}/draw`)}
              disabled={!screens.md}
            >
              Start Game
            </Button>
          </Space>
        </Card>
      )}
    </PageLayout>
  )
}
