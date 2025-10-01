export const metadata = {
  title: "特定商取引法に基づく表記 | AI Digital Lab",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main className="tokushoho" style={{maxWidth:880,margin:"40px auto",padding:"0 20px",lineHeight:1.8,color:"#333"}}>
      <h1 style={{fontSize:24,marginBottom:8,borderBottom:"2px solid #ddd",paddingBottom:8}}>特定商取引法に基づく表記</h1>
      <dl style={{margin:0}}>
        <dt style={{fontWeight:"bold",marginTop:16}}>販売事業者名</dt><dd style={{marginLeft:12}}>AI Digital Lab（屋号）</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>代表責任者名</dt><dd style={{marginLeft:12}}>赤尾 喜一</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>所在地</dt><dd style={{marginLeft:12}}>〒450-0002<br/>愛知県名古屋市中村区名駅4丁目24番5号 第2森ビル401</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>電話番号</dt>
        <dd style={{marginLeft:12}}>お客様からのご請求があった場合、遅滞なく開示いたします。お問い合わせは下記メールアドレスよりお願いいたします。</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>メールアドレス</dt><dd style={{marginLeft:12}}>info@ai-digital-lab.com</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>販売URL</dt><dd style={{marginLeft:12}}><a href="https://ai-digital-lab.com/">https://ai-digital-lab.com/</a></dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>販売価格</dt><dd style={{marginLeft:12}}>各商品ページに税込価格を表示</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>商品代金以外の必要料金</dt><dd style={{marginLeft:12}}>振込手数料、通信料等はお客様負担</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>支払方法</dt><dd style={{marginLeft:12}}>クレジットカード決済、PayPay決済、Google Pay決済</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>支払時期</dt><dd style={{marginLeft:12}}>ご注文時に決済</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>商品の引き渡し時期</dt><dd style={{marginLeft:12}}>決済完了後、即時にメール送信／ダウンロード可能</dd>
        <dt style={{fontWeight:"bold",marginTop:16}}>返品・キャンセルについて</dt><dd style={{marginLeft:12}}>デジタル商品の性質上、返品・キャンセルはお受けできません。内容に不備がある場合はお問い合わせください。</dd>
      </dl>
    </main>
  );
}
