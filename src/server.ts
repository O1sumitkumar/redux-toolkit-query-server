import { App } from '@/app';
import { UsersDetailsRoute } from '@routes/auth/usersDetails.route';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { TaskRoute } from '@routes/tasks.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new UserRoute(), new TaskRoute(), new AuthRoute(), new UsersDetailsRoute()]);

app.listen();
