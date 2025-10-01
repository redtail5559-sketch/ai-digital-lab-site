export const metadata = {
  title: "プライバシーポリシー | AI Digital Lab",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main style={{maxWidth:880,margin:"40px auto",padding:"0 20px",lineHeight:1.8,color:"#333"}}>
      <h1 style={{fontSize:24,marginBottom:8,borderBottom:"2px solid #ddd",paddingBottom:8}}>プライバシーポリシー</h1>
      <p style={{color:"#666",fontSize:13}}>最終更新日：2025-09-30</p>

      <h2 style={{marginTop:24,fontSize:18}}>1. 収集する情報</h2>
      <ul>
        <li>連絡先情報（メールアドレス、氏名 等）</li>
        <li>決済関連情報（状態、取引ID、金額、購入内容。※カード番号等は決済代行が処理し当方は保持しません）</li>
        <li>技術情報（IP、ブラウザ、Cookie、アクセスログ 等）</li>
        <li>お問い合わせ内容</li>
        <li>生成AIの入力・出力テキスト（品質改善・不具合調査のため必要最小限）</li>
      </ul>

      <h2 style={{marginTop:24,fontSize:18}}>2. 利用目的</h2>
      <ul>
        <li>サービス提供・課金・本人確認・不正防止</li>
        <li>商品の提供（メール送付・ダウンロード）、サポート対応</li>
        <li>改善・新機能開発・品質向上のための分析</li>
        <li>重要なお知らせの配信、法令遵守</li>
      </ul>

      <h2 style={{marginTop:24,fontSize:18}}>3. 第三者提供・委託</h2>
      <ul>
        <li>決済代行：Stripe, PayPay, Google Pay</li>
        <li>メール配信：例）Resend</li>
        <li>解析：例）Google Analytics</li>
        <li>ホスティング：例）Vercel</li>
      </ul>

      <h2 style={{marginTop:24,fontSize:18}}>4. Cookie等の利用</h2>
      <p>利便性向上やアクセス分析のためCookie等を利用します。無効化すると一部機能に影響します。</p>

      <h2 style={{marginTop:24,fontSize:18}}>5. 安全管理措置</h2>
      <p>アクセス制御、暗号化、監査ログ、権限管理等の適切な措置を講じます。</p>

      <h2 style={{marginTop:24,fontSize:18}}>6. 保有期間</h2>
      <p>目的達成に必要な期間または法令に基づく期間保有し、不要になれば安全に削除・匿名化します。</p>

      <h2 style={{marginTop:24,fontSize:18}}>7. 開示等の請求</h2>
      <p>開示・訂正・削除・利用停止・第三者提供停止等の請求が可能です。本人確認のうえ、法令に基づき対応します。</p>

      <h2 style={{marginTop:24,fontSize:18}}>8. 未成年の利用</h2>
      <p>未成年者は法定代理人の同意を得て利用してください。</p>

      <h2 style={{marginTop:24,fontSize:18}}>9. 変更</h2>
      <p>本ポリシーは必要に応じて改定します。重要な変更は合理的な方法で通知します。</p>

      <h2 style={{marginTop:24,fontSize:18}}>10. お問い合わせ窓口</h2>
      <ul>
        <li>AI Digital Lab（屋号）</li>
        <li>所在地：〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号 第2森ビル401</li>
        <li>メール：info@ai-digital-lab.com</li>
        <li>電話番号：お客様からのご請求があった場合、遅滞なく開示いたします。</li>
      </ul>

      <p style={{marginTop:24,color:"#666",fontSize:13}}>※一般的な雛形であり、法的助言ではありません。必要に応じて専門家の確認を推奨します。</p>
    </main>
  );
}
