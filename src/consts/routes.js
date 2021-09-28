const base = '/';
const authBase = '/auth';
const homeBase = '/home';

const routes = {
  getBase: () => `${base}`,
  getAuthLogin: () => `${authBase}/login`,
  getAuthRegistration: () => `${authBase}/registration`,
  getHome: () => `${homeBase}`
};

export default routes;