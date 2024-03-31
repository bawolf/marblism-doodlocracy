'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Image } from 'antd'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GameResultsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [gameResults, setGameResults] = useState<any[]>([])

  useEffect(() => {
    const fetchGameResults = async () => {
      try {
        const games = await Api.Game.findManyByLobbyId(params.lobbyId, {
          includes: [
            'prompts',
            'prompts.drawings',
            'prompts.drawings.guesss',
            'prompts.drawings.user',
          ],
        })
        if (games.length > 0) {
          setGameResults(games[0].prompts || [])
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch game results', { variant: 'error' })
      }
    }

    fetchGameResults()
  }, [params.lobbyId])

  return (
    <>
      <Title level={2}>Game Results</Title>
      <Text>
        Here are the results of the game including prompts, drawings, and
        guesses.
      </Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {gameResults.map(prompt => (
          <Col key={prompt.id} xs={24} sm={12} md={8} lg={6}>
            <Card title={`Prompt: ${prompt.text}`}>
              {prompt.drawings?.map(drawing => (
                <div key={drawing.id}>
                  <Image
                    src={drawing.imageDataUrl}
                    alt="drawing"
                    style={{ width: '100%', marginBottom: '10px' }}
                  />
                  <Text strong>Artist: {drawing.user?.name}</Text>
                  <div>
                    {drawing.guesss?.map(guess => (
                      <div
                        key={guess.id}
                        style={{ fontStyle: 'italic', display: 'block' }}
                      >
                        Guess: {guess.text} (by {guess.user?.name})
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
