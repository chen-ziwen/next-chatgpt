import Link from "next/link"

export default function NavBar () {

    return (
        <nav className="flex flex-col gap-6 lg:gap-10">
        <Link href="/">
            返回首页
        </Link>

        <Link href="/dashboard">
            仪表盘
        </Link>
        
        <Link href="/dashboard/setting">
            设置
        </Link>
        <Link href="/dashboard/hello">
            你好
        </Link>
        </nav>
    )
}