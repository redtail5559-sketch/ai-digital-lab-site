export const metadata = { title: "AI Digital Lab" };

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial"}}>
        {children}
        <footer style={{marginTop:40,padding:"16px 0",borderTop:"1px solid #e5e5e5",textAlign:"center",fontSize:14,color:"#666"}}>
          <nav style={{display:"inline-flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
            <a href="/tokushoho">特定商取引法に基づく表記</a><span>／</span>
            <a href="/terms">利用規約</a><span>／</span>
            <a href="/privacy">プライバシーポリシー</a><span>／</span>
            <a href="/disclaimer">免責事項</a><span>／</span>
            <a href="mailto:info@ai-digital-lab.com">お問い合わせ</a>
          </nav>
          <div style={{marginTop:6}}>© {new Date().getFullYear()} AI Digital Lab</div>
        </footer>
      </body>
    </html>
  );
}
