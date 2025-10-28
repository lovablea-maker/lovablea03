import { BookOpen } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Postly = () => {
  return (
    <CourseLayout
      title="特殊課 - Postly"
      subtitle="掌握社交媒體內容創作的藝術"
      icon={BookOpen}
    >
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            全方位智能社群媒體管理平台,讓內容創作與發佈變得更簡單高效
          </p>
          <p className="text-sm text-muted-foreground italic">
            (本系統與 make 自動化流程平台串接而成)
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">強大功能特色</h2>
          <p className="text-muted-foreground mb-8">
            從內容收集到發佈管理,一站式解決您的社群媒體營運需求。
          </p>

          <div className="space-y-8">
            {/* 功能 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">1</span>
                <h3 className="text-xl font-semibold text-foreground">智能內容來源整合</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_01.png" alt="智能內容抓取功能" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                一鍵抓取多平台內容來源,包含新聞網站、社群媒體動態、部落格文章等。
                智能分析內容品質與熱度,自動篩選優質素材。支持 RSS 訂閱、關鍵字監控、競品追蹤等多元化收集方式,
                建立專屬的內容資料庫,為您的社群策略提供源源不絕的創作靈感。
              </p>
            </div>

            {/* 功能 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">2</span>
                <h3 className="text-xl font-semibold text-foreground">精準目標管理</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_02.png" alt="精準目標選擇介面" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                多層級粉絲專頁管理系統,支持品牌、子品牌、活動專頁的分級管理。
                彈性設定發佈權限與審核流程,包含即時發佈、主管審核、排程發佈三種模式。
                整合受眾分析功能,根據粉絲活躍時間智能推薦最佳發文時機,確保內容觸及率最大化。
              </p>
            </div>

            {/* 功能 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">3</span>
                <h3 className="text-xl font-semibold text-foreground">靈活內容編輯</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_03.png" alt="文章編輯介面" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                所見即所得的專業編輯器,支持富文本格式、圖片插入、連結嵌入等完整功能。
                內建多種文章模板與版型選擇,快速套用品牌視覺風格。支持協作編輯功能,
                團隊成員可同時編輯與留言討論,版本控制機制確保內容修改過程完全透明可追溯。
              </p>
            </div>

            {/* 功能 4 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">4</span>
                <h3 className="text-xl font-semibold text-foreground">AI 智慧協作</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_04.png" alt="AI 協助功能" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                整合多款頂尖 AI 模型進行內容創作與優化,包含 GPT、Claude、Gemini、Grok 等。
                支持文字潤飾、風格轉換、多語言翻譯、SEO 優化建議等功能。AI 圖片生成器可根據文字描述
                自動產生配圖,影音剪輯AI協助製作短影片與動態圖像,大幅縮短創作週期。
              </p>
            </div>

            {/* 功能 5 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">5</span>
                <h3 className="text-xl font-semibold text-foreground">智能發佈排程</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_05.png" alt="發佈排程設定" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                跨平台統一排程管理系統,一次設定即可同步發佈至 Facebook、Instagram、
                X (Twitter)、LinkedIn等多個社群平台。內建最佳發文時間建議演算法,分析目標受眾活躍度
                自動推薦發佈時機。支持重複排程、節慶預設、緊急插播等彈性調度功能。
              </p>
            </div>

            {/* 功能 6 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">6</span>
                <h3 className="text-xl font-semibold text-foreground">視覺化排程管理</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_06.png" alt="行事曆檢視" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                直觀的月曆排程視角管理,清楚展示所有預定發佈內容的時間軸。
                拖拉式操作輕鬆調整發佈時間,支持批量編輯與複製排程。內建內容密度分析,
                避免發文過於密集或稀疏,確保粉絲頁維持穩定的內容曝光頻率。
              </p>
            </div>

            {/* 功能 7 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">7</span>
                <h3 className="text-xl font-semibold text-foreground">完整歷史追蹤</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_07.png" alt="發佈歷史記錄" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                全方位發佈記錄與成效分析系統,追蹤每則貼文的觸及率、互動率、分享數等關鍵指標。
                支持自訂時間區間報表生成,比較不同內容類型的表現差異。未來將整合各 Analytics 分析系統
                與社群平台原生數據,提供完整的 ROI 分析與優化建議,讓數據驅動您的內容策略。
              </p>
            </div>

            {/* 功能 8 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">8</span>
                <h3 className="text-xl font-semibold text-foreground">多平台整合管理</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_08.png" alt="平台管理設定" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                一站式社群帳號管理中心,支持 Facebook、Instagram、X (Twitter)、LinkedIn、
                Threads 等主流平台。智能 API 串接確保帳號授權安全穩定,支持多品牌、多地區帳號分組管理。
                內建權限控制系統,不同角色可管理指定的社群帳號,避免誤操作風險。
              </p>
            </div>

            {/* 功能 9 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">9</span>
                <h3 className="text-xl font-semibold text-foreground">智慧模型系統</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_09.png" alt="模板與模型設定" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                豐富的內容範本庫與 AI 模型客製化設定,包含節慶賀詞、產品介紹、活動宣傳等
                各種情境模板。支持建立專屬品牌的 AI 寫作風格,訓練模型學習您的語調與用詞偏好。
                模板支持變數填入,可快速產生個人化內容,大幅提升內容製作效率。
              </p>
            </div>

            {/* 功能 10 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">10</span>
                <h3 className="text-xl font-semibold text-foreground">完整備份還原機制</h3>
              </div>
              <img src="https://smart4a.tw/prod/cms/images/cms_10.png" alt="備份與還原機制" className="w-full rounded-lg mb-4 shadow-md" />
              <p className="text-muted-foreground leading-relaxed">
                企業級資料備份與災難復原系統,自動定期備份所有內容、設定與帳號資訊。
                支持多版本備份保存,可隨時回復至指定時間點的系統狀態。雲端同步機制確保資料安全,
                即使設備損壞也能快速恢復所有工作環境,讓您的社群營運管理更加穩定可靠。
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-8 px-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-foreground">準備好提升您的社群媒體管理效率了嗎?</h2>
          <p className="text-muted-foreground mb-6">立即報名課程,掌握 Smart4A Postly 的所有強大功能</p>
          <a 
            href="https://smart4a.tw/edu/PostlyClass.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            📚 立即報名課程
          </a>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Postly;
