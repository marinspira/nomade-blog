/**
 * @type {import('next').NextConfig}
 */

const repo = process.env.NODE_ENV === 'production' ? '/nomade-blog' : ''

const assetPrefix = `${repo}/`
const basePath = `${repo}`

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: 'export',
}