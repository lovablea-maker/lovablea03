import { Brain } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Intermediate = () => {
  return (
    <CourseLayout
      title="中階班 - 思維流程"
      subtitle="提升思維品質與決策能力"
      icon={Brain}
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">課程簡介</h2>
          <p className="text-muted-foreground leading-relaxed">
            深入探討思維模式與決策流程，學習如何優化思考方式，
            做出更明智的決策並解決複雜問題。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">學習目標</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>掌握系統思維與批判性思考</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>學習問題分析與解決框架</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>提升決策品質與效率</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>培養創新思維能力</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">進階技能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">思維模型</h3>
              <p className="text-sm text-muted-foreground">學習並應用經典思維模型</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">決策框架</h3>
              <p className="text-sm text-muted-foreground">建立科學的決策流程</p>
            </div>
          </div>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Intermediate;
