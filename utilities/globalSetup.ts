/**
 * globalSetup script to check if the environment is reachable before running tests.
 * If not reachable, all tests are skipped by exiting the process early.
 **/
import { isEnvReachable } from '@utils/envCheck';

async function globalSetup() {
  const reachable = await isEnvReachable();

  if (!reachable) {
    // console.warn('\n⚠️ Test environment not reachable: skipping all tests.\n');
    process.exit(1); // ❌ Exit Playwright before running any tests
  }
}

export default globalSetup;
