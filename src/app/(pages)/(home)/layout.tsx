import NavHomePage from "@/components/nav.home"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div>
            <NavHomePage/>
        </div>
        {children}
      </div>
    )
  }