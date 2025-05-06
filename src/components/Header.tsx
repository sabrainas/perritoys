interface Title {
    title: string
}

export default function Header({title}: Title) {
  return (
    <header className="p-10">
        <h1 className="text-center text-3xl text-[#c84755] font-bold">
            {title}
        </h1>
    </header>
  )
}
