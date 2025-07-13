"use client"

import { useEffect, useRef, useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"

export default function DinoGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [showDiscountCode, setShowDiscountCode] = useState(false)
    const [discountCode, setDiscountCode] = useState("")

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Game state
        const game = {
            dino: {
                x: 50,
                y: 150,
                width: 20,
                height: 20,
                velocityY: 0,
                onGround: true,
                ducking: false
            },
            obstacles: [] as Array<{ x: number, y: number, width: number, height: number, type: 'cactus' | 'bird' }>,
            clouds: [] as Array<{ x: number, y: number }>,
            gameSpeed: 2,
            score: 0,
            frame: 0,
            gameOver: false,
            spawnTimer: 0
        }

        let keys = {
            space: false,
            down: false
        }

        // Event listeners
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                e.preventDefault()
                keys.space = true
                if (!isPlaying && !game.gameOver) {
                    setIsPlaying(true)
                }
                if (game.gameOver) {
                    resetGame()
                }
            }
            if (e.code === 'ArrowDown') {
                e.preventDefault()
                keys.down = true
            }
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                keys.space = false
            }
            if (e.code === 'ArrowDown') {
                keys.down = false
                game.dino.ducking = false
            }
        }

        const handleCanvasClick = () => {
            if (!isPlaying && !game.gameOver) {
                setIsPlaying(true)
            } else if (game.gameOver) {
                resetGame()
            } else {
                keys.space = true
                setTimeout(() => keys.space = false, 100)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        canvas.addEventListener('click', handleCanvasClick)

        const resetGame = () => {
            game.dino.y = 150
            game.dino.velocityY = 0
            game.dino.onGround = true
            game.dino.ducking = false
            game.obstacles = []
            game.clouds = []
            game.gameSpeed = 2
            game.score = 0
            game.frame = 0
            game.gameOver = false
            game.spawnTimer = 0
            setScore(0)
            setIsPlaying(true)
        }

        const spawnObstacle = () => {
            const types = ['cactus', 'bird'] as const
            const type = types[Math.floor(Math.random() * types.length)]

            if (type === 'cactus') {
                game.obstacles.push({
                    x: canvas.width,
                    y: 160,
                    width: 15,
                    height: 30,
                    type: 'cactus'
                })
            } else {
                game.obstacles.push({
                    x: canvas.width,
                    y: 120 + Math.random() * 30,
                    width: 20,
                    height: 15,
                    type: 'bird'
                })
            }
        }

        const spawnCloud = () => {
            game.clouds.push({
                x: canvas.width,
                y: 40 + Math.random() * 60
            })
        }

        const checkCollision = (rect1: any, rect2: any) => {
            return rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.y + rect1.height > rect2.y
        }

        const generateDiscountCode = (score: number) => {
            const codes = [
                "DINO50", "BYTE25", "JUMP30", "SPEED40", "EPIC60",
                "RUNNER35", "FAST45", "HERO55", "LEGEND70"
            ]
            return codes[Math.floor(score / 1000) % codes.length] || "MASTER100"
        }

        const gameLoop = () => {
            if (game.gameOver) return

            game.frame++

            // Increase speed and score over time (much faster progression)
            if (game.frame % 30 === 0) {
                game.score += 10
                game.gameSpeed += 0.05 // Faster speed increase
                setScore(game.score)
            }

            // Clear canvas
            ctx.fillStyle = "white"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw ground
            ctx.fillStyle = "black"
            ctx.fillRect(0, 190, canvas.width, 2)

            // Update and draw clouds
            game.clouds.forEach((cloud, index) => {
                cloud.x -= game.gameSpeed * 0.3
                if (cloud.x < -30) {
                    game.clouds.splice(index, 1)
                }

                // Draw cloud
                ctx.fillStyle = "#ddd"
                ctx.fillRect(cloud.x, cloud.y, 25, 12)
                ctx.fillRect(cloud.x + 5, cloud.y - 5, 15, 8)
                ctx.fillRect(cloud.x + 10, cloud.y + 8, 20, 6)
            })

            // Spawn clouds
            if (Math.random() < 0.005) {
                spawnCloud()
            }

            // Dino physics
            if (keys.space && game.dino.onGround && !game.dino.ducking) {
                game.dino.velocityY = -8
                game.dino.onGround = false
            }

            if (keys.down && game.dino.onGround) {
                game.dino.ducking = true
            }

            // Apply gravity
            if (!game.dino.onGround) {
                game.dino.velocityY += 0.4
                game.dino.y += game.dino.velocityY

                if (game.dino.y >= 150) {
                    game.dino.y = 150
                    game.dino.onGround = true
                    game.dino.velocityY = 0
                }
            }

            // Draw dino
            ctx.fillStyle = "black"
            if (game.dino.ducking) {
                ctx.fillRect(game.dino.x, game.dino.y + 10, game.dino.width + 5, game.dino.height - 10)
            } else {
                ctx.fillRect(game.dino.x, game.dino.y, game.dino.width, game.dino.height)
                // Simple legs animation
                if (game.dino.onGround && game.frame % 20 < 10) {
                    ctx.fillRect(game.dino.x + 5, game.dino.y + 20, 3, 8)
                    ctx.fillRect(game.dino.x + 12, game.dino.y + 20, 3, 8)
                } else if (game.dino.onGround) {
                    ctx.fillRect(game.dino.x + 3, game.dino.y + 20, 3, 8)
                    ctx.fillRect(game.dino.x + 14, game.dino.y + 20, 3, 8)
                }
            }

            // Spawn obstacles (faster spawning)
            game.spawnTimer++
            if (game.spawnTimer > Math.max(60 - game.gameSpeed * 5, 25)) {
                spawnObstacle()
                game.spawnTimer = 0
            }

            // Update and draw obstacles
            game.obstacles.forEach((obstacle, index) => {
                obstacle.x -= game.gameSpeed

                if (obstacle.x < -obstacle.width) {
                    game.obstacles.splice(index, 1)
                }

                // Draw obstacle
                ctx.fillStyle = "black"
                if (obstacle.type === 'cactus') {
                    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
                    // Add spikes
                    for (let i = 0; i < 3; i++) {
                        ctx.fillRect(obstacle.x - 2 + i * 6, obstacle.y + 5 + i * 8, 4, 6)
                    }
                } else {
                    // Draw bird
                    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
                    // Wings animation
                    if (game.frame % 20 < 10) {
                        ctx.fillRect(obstacle.x - 3, obstacle.y - 2, 8, 4)
                        ctx.fillRect(obstacle.x + 15, obstacle.y - 2, 8, 4)
                    }
                }

                // Collision detection
                const dinoHitbox = {
                    x: game.dino.x + 2,
                    y: game.dino.ducking ? game.dino.y + 10 : game.dino.y,
                    width: game.dino.ducking ? game.dino.width + 3 : game.dino.width - 4,
                    height: game.dino.ducking ? game.dino.height - 10 : game.dino.height - 2
                }

                if (checkCollision(dinoHitbox, obstacle)) {
                    game.gameOver = true
                    setIsPlaying(false)

                    // Check for high score and discount code
                    if (game.score > highScore) {
                        setHighScore(game.score)
                        if (game.score >= 500) { // Lower threshold for easier access
                            const code = generateDiscountCode(game.score)
                            setDiscountCode(code)
                            setShowDiscountCode(true)
                        }
                    }
                }
            })

            // Draw score
            ctx.fillStyle = "black"
            ctx.font = "16px monospace"
            ctx.textAlign = "left"
            ctx.fillText(`SCORE: ${game.score}`, 10, 25)
            if (highScore > 0) {
                ctx.fillText(`HI: ${highScore}`, 10, 45)
            }

            if (isPlaying && !game.gameOver) {
                animationRef.current = requestAnimationFrame(gameLoop)
            }
        }

        if (isPlaying && !game.gameOver) {
            gameLoop()
        } else {
            // Draw static state
            ctx.fillStyle = "white"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw ground
            ctx.fillStyle = "black"
            ctx.fillRect(0, 190, canvas.width, 2)

            // Draw dino
            ctx.fillRect(game.dino.x, game.dino.y, game.dino.width, game.dino.height)

            // Instructions
            ctx.font = "14px monospace"
            ctx.textAlign = "center"
            if (game.gameOver) {
                ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 20)
                ctx.fillText(`FINAL SCORE: ${game.score}`, canvas.width / 2, canvas.height / 2)
                ctx.fillText("CLICK OR PRESS SPACE TO RESTART", canvas.width / 2, canvas.height / 2 + 20)
            } else {
                ctx.fillText("CLICK OR PRESS SPACE TO START", canvas.width / 2, canvas.height / 2)
                ctx.fillText("SPACE/↑ TO JUMP • ↓ TO DUCK", canvas.width / 2, canvas.height / 2 + 20)
            }

            if (highScore > 0) {
                ctx.textAlign = "left"
                ctx.fillText(`HIGH SCORE: ${highScore}`, 10, 25)
            }
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
            canvas.removeEventListener('click', handleCanvasClick)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isPlaying, highScore])

    const closeDiscountModal = () => {
        setShowDiscountCode(false)
    }

    return (
        <div className="relative">
            <div className="border-4 border-black bg-white">
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={200}
                    className="cursor-pointer block"
                />
                <div className="p-4 text-center border-t-4 border-black">
                    <div className="text-sm font-bold mb-2">BYTE.EXE</div>
                    <div className="text-xs">
                        {isPlaying ? "SPACE TO JUMP • ↓ TO DUCK • BEAT 500 FOR DISCOUNT!" : "CLICK TO START DINO GAME"}
                    </div>
                    {highScore > 0 && (
                        <div className="text-xs mt-1 text-gray-600">
                            HIGH SCORE: {highScore} {highScore >= 500 && "🏆"}
                        </div>
                    )}
                </div>
            </div>

            {/* Discount Code Modal */}
            {showDiscountCode && (
                <Dialog open={showDiscountCode}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                AMAZING SCORE! 🏆
                            </DialogTitle>
                        </DialogHeader>
                        <p>
                            You scored <strong>{score}</strong> points!
                            Here's your exclusive discount code:
                        </p>
                        <div className="bg-black text-white p-4 font-mono text-xl font-bold">
                            {discountCode}
                        </div>
                        <p className="text-sm text-gray-600">
                            Use this code for a special discount on our enterprise services!
                            Valid for 30 days.
                        </p>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button onClick={closeDiscountModal} variant="outline">Close</Button>
                            </DialogClose>
                            <Button onClick={() => navigator.clipboard.writeText(discountCode)}>Copy Code</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            )}
        </div>
    )
}
