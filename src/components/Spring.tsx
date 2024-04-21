import { useEffect, useRef } from "react"

const Spring = () => {
  const followerRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const backgroundBlurRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: MouseEvent) => {
    if (followerRef.current && backgroundRef.current && backgroundBlurRef.current) {
      const mouseX = event.clientX
      const mouseY = event.clientY
      
      // 设置鼠标位置为剪切路径圆心，并更新剪切路径
      backgroundRef.current.style.clipPath = `circle(15rem at ${mouseX}px ${mouseY}px)`
      
      // 将followerRef跟随鼠标移动
      followerRef.current.style.left = mouseX + "px"
      followerRef.current.style.top = mouseY + "px"
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="spring-container">
      <div className="background" ref={backgroundBlurRef} style={{ top: 0, left: 0, filter: "blur(5px)" }} />
      <div className="background" ref={backgroundRef} style={{ top: 0, left: 0 }} />
      <div className="mousemove" ref={followerRef} />
    </div>
  )
}

export default Spring
