"use client"

import { useEffect, useRef, useState } from "react"

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Game state
    const game = {
      ball: { x: 200, y: 150, dx: 3, dy: 2, size: 8 },
      leftPaddle: { x: 20, y: 120, width: 8, height: 60, dy: 0 },
      rightPaddle: { x: 372, y: 120, width: 8, height: 60, dy: 0 },
      leftScore: 0,
      rightScore: 0,
    }

    let mouseY = 150

    // Mouse/touch controls
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseY = ((e.clientY - rect.top) / rect.height) * canvas.height
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      mouseY = ((touch.clientY - rect.top) / rect.height) * canvas.height
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove)

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = "white"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw center line
      ctx.fillStyle = "black"
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.fillRect(canvas.width / 2 - 2, i, 4, 10)
      }

      // Update left paddle (player controlled)
      game.leftPaddle.y = mouseY - game.leftPaddle.height / 2
      game.leftPaddle.y = Math.max(0, Math.min(canvas.height - game.leftPaddle.height, game.leftPaddle.y))

      // Update right paddle (AI)
      const paddleCenter = game.rightPaddle.y + game.rightPaddle.height / 2
      const ballCenter = game.ball.y
      if (paddleCenter < ballCenter - 10) {
        game.rightPaddle.y += 2.5
      } else if (paddleCenter > ballCenter + 10) {
        game.rightPaddle.y -= 2.5
      }
      game.rightPaddle.y = Math.max(0, Math.min(canvas.height - game.rightPaddle.height, game.rightPaddle.y))

      // Update ball
      game.ball.x += game.ball.dx
      game.ball.y += game.ball.dy

      // Ball collision with top/bottom
      if (game.ball.y <= 0 || game.ball.y >= canvas.height) {
        game.ball.dy = -game.ball.dy
      }

      // Ball collision with paddles
      if (
        game.ball.x <= game.leftPaddle.x + game.leftPaddle.width &&
        game.ball.y >= game.leftPaddle.y &&
        game.ball.y <= game.leftPaddle.y + game.leftPaddle.height
      ) {
        game.ball.dx = -game.ball.dx
        game.ball.x = game.leftPaddle.x + game.leftPaddle.width
      }

      if (
        game.ball.x >= game.rightPaddle.x - game.ball.size &&
        game.ball.y >= game.rightPaddle.y &&
        game.ball.y <= game.rightPaddle.y + game.rightPaddle.height
      ) {
        game.ball.dx = -game.ball.dx
        game.ball.x = game.rightPaddle.x - game.ball.size
      }

      // Ball out of bounds
      if (game.ball.x < 0) {
        game.rightScore++
        game.ball.x = 200
        game.ball.y = 150
        game.ball.dx = 3
        game.ball.dy = Math.random() > 0.5 ? 2 : -2
      }

      if (game.ball.x > canvas.width) {
        game.leftScore++
        game.ball.x = 200
        game.ball.y = 150
        game.ball.dx = -3
        game.ball.dy = Math.random() > 0.5 ? 2 : -2
      }

      // Draw paddles
      ctx.fillStyle = "black"
      ctx.fillRect(game.leftPaddle.x, game.leftPaddle.y, game.leftPaddle.width, game.leftPaddle.height)
      ctx.fillRect(game.rightPaddle.x, game.rightPaddle.y, game.rightPaddle.width, game.rightPaddle.height)

      // Draw ball
      ctx.fillRect(game.ball.x, game.ball.y, game.ball.size, game.ball.size)

      // Draw scores
      ctx.font = "24px monospace"
      ctx.textAlign = "center"
      ctx.fillText(game.leftScore.toString(), canvas.width / 4, 40)
      ctx.fillText(game.rightScore.toString(), (3 * canvas.width) / 4, 40)

      if (isPlaying) {
        animationRef.current = requestAnimationFrame(gameLoop)
      }
    }

    if (isPlaying) {
      gameLoop()
    } else {
      // Draw static game state
      ctx.fillStyle = "white"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "black"

      // Center line
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.fillRect(canvas.width / 2 - 2, i, 4, 10)
      }

      // Paddles
      ctx.fillRect(game.leftPaddle.x, game.leftPaddle.y, game.leftPaddle.width, game.leftPaddle.height)
      ctx.fillRect(game.rightPaddle.x, game.rightPaddle.y, game.rightPaddle.width, game.rightPaddle.height)

      // Ball
      ctx.fillRect(game.ball.x, game.ball.y, game.ball.size, game.ball.size)

      // Play prompt
      ctx.font = "16px monospace"
      ctx.textAlign = "center"
      ctx.fillText("CLICK TO PLAY", canvas.width / 2, canvas.height / 2 + 50)
    }

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  const toggleGame = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="border-4 border-black bg-white">
      <canvas ref={canvasRef} width={400} height={300} className="cursor-pointer block" onClick={toggleGame} />
      <div className="p-4 text-center border-t-4 border-black">
        <div className="text-sm font-bold mb-2">PONG.EXE</div>
        <div className="text-xs">{isPlaying ? "MOVE MOUSE TO CONTROL • CLICK TO PAUSE" : "CLICK TO START GAME"}</div>
      </div>
    </div>
  )
}
