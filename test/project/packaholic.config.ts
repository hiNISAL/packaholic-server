import { defineConfig } from "packaholic";

export default defineConfig({
  commands: [
    'npm run start',
  ],
  afterCommandsExec(ctx) {
    console.log(ctx);
  },
});
