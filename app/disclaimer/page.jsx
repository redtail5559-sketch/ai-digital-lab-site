export const metadata = {
  title: "免責事項 | AI Digital Lab",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main style={{maxWidth:880,margin:"40px auto",padding:"0 20px",lineHeight:1.8,color:"#333"}}>
      <h1 style={{fontSize:24,marginBottom:8,borderBottom:"2px solid #ddd",paddingBottom:8}}>免責事項</h1>
      <p style={{color:"#666",fontSize:13}}>最終更新日：2025-09-30</p>

      <h2 style={{marginTop:24,fontSize:18}}>1. AI出力に関して</h2>
      <p>当方の各サービスはAIによる自動生成コンテンツを含み、一般的なアドバイス提供を目的としています。正確性・完全性・有用性を保証するものではありません。</p>

      <h2 style={{marginTop:24,fontSize:18}}>2. 利用者の自己責任</h2>
      <p>本サービスの利用は自己責任で行ってください。発生した損害につき当方は一切責任を負いません。</p>

      <h2 style={{marginTop:24,fontSize:18}}>3. 損害賠償責任の制限</h2>
      <p>当方の賠償責任が認められる場合でも、上限はユーザーが当該月に支払った利用料金の総額とします。</p>

      <h2 style={{marginTop:24,fontSize:18}}>4. 外部リンク・広告</h2>
      <p>外部サイト・広告の内容について当方は責任を負いません。</p>

      <h2 style={{marginTop:24,fontSize:18}}>5. 変更</h2>
      <p>本免責事項は予告なく変更されることがあります。変更後は本ページ掲載時に効力を生じます。</p>

      <h2 style={{marginTop:24,fontSize:18}}>6. お問い合わせ</h2>
      <ul>
        <li>AI Digital Lab（屋号）</li>
        <li>所在地：〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号 第2森ビル401</li>
        <li>メール：info@ai-digital-lab.com</li>
        <li>電話番号：お客様からのご請求があった場合、遅滞なく開示いたします。</li>
      </ul>

      <p style={{marginTop:24,color:"#666",fontSize:13}}>※一般的な雛形であり、法的助言ではありません。</p>
    </main>
  );
}
