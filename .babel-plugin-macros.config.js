const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  styledComponents: {
    pure: true,
    fileName: isDev,
    displayName: isDev
  },
}
