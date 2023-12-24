import Link from "next/link"

export default function Header () {
     
    return (
      <header className="h-20 bg-pink-200">
          我是顶部导航栏
          <div className="w-3/5 bg-yellow-800">
             <Link href="/">首页</Link>
             <Link href="/chat">聊天</Link>
             <Link href="/chat/root">管路员</Link>
             <Link href="/chat/user">用户</Link>
          </div>
      </header>
    )
}