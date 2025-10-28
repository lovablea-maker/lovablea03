import { Users } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Advanced = () => {
  return (
    <CourseLayout
      title="高階班 - 互動流程"
      subtitle="掌握高效協作與溝通藝術"
      icon={Users}
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">課程簡介</h2>
          <p className="text-muted-foreground leading-relaxed">
            本課程專注於團隊協作與人際互動，教授如何在複雜環境中
            有效溝通、領導團隊並推動變革。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">學習目標</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>掌握高效溝通與傾聽技巧</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>學習團隊協作與衝突管理</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>提升影響力與領導能力</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>建立有效的協作流程</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">高階技能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">領導力</h3>
              <p className="text-sm text-muted-foreground">培養卓越的領導與影響力</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">協作設計</h3>
              <p className="text-sm text-muted-foreground">設計高效的團隊協作模式</p>
            </div>
          </div>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Advanced;
