import { User } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Assistant = () => {
  return (
    <CourseLayout
      title="特殊課 - 個人助理"
      subtitle="打造高效智能的個人助理系統"
      icon={User}
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">課程簡介</h2>
          <p className="text-muted-foreground leading-relaxed">
            學習如何利用 AI 技術和自動化工具，建立一個專屬的個人助理系統，
            提升工作效率並優化日常管理流程。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">學習目標</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>掌握個人助理系統的核心概念</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>學習時間管理與任務優先級設定</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>運用 AI 工具自動化日常工作</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>建立個性化的工作流程系統</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">課程特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">AI 整合</h3>
              <p className="text-sm text-muted-foreground">學習整合最新的 AI 助理工具</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">自動化流程</h3>
              <p className="text-sm text-muted-foreground">建立無縫的工作自動化系統</p>
            </div>
          </div>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Assistant;
