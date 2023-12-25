import NavHomePage from "@/components/nav.home"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div className="relative">
            <NavHomePage/>
        </div>
        {children}
      </div>
    )
  }