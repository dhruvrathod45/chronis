import AppLayout from "../components/layout/AppLayout";
import PageWrapper from "../components/layout/PageWrapper";

export default function Settings() {
  return (
    <AppLayout>
      <PageWrapper>
        <div className="space-y-6">
          <div className="gold-card rounded-2xl p-8">
            <h1 className="luxury-title text-5xl">
              Settings
            </h1>

            <p className="mt-3 text-zinc-500">
              Configure Chronis preferences.
            </p>
          </div>

          <div className="gold-card rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">
              Theme
            </h2>

            <p className="mt-4 text-zinc-400">
              Premium Gold Theme Active
            </p>
          </div>

          <div className="gold-card rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">
              Notifications
            </h2>

            <label className="mt-4 flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Behavioral Alerts Enabled
            </label>
          </div>

          <div className="gold-card rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">
              AI Preferences
            </h2>

            <div className="mt-5 space-y-3">
              <label className="block">
                <input type="checkbox" defaultChecked />
                <span className="ml-3">
                  Enable Predictions
                </span>
              </label>

              <label className="block">
                <input type="checkbox" defaultChecked />
                <span className="ml-3">
                  Enable Behavioral Insights
                </span>
              </label>

              <label className="block">
                <input type="checkbox" />
                <span className="ml-3">
                  Experimental Models
                </span>
              </label>
            </div>
          </div>
        </div>
      </PageWrapper>
    </AppLayout>
  );
}