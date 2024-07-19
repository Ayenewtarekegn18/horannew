import siteConfig from '../../data/config'

type GetSeoOptions = {
  omitOpenGraphImage?: boolean
}

export function getSeo(options: GetSeoOptions = {}) {
  const { omitOpenGraphImage } = options
  const { seo } = siteConfig
  const { images, ...openGraph } = seo.openGraph ?? { images: undefined }

  return {
    ...seo,
    openGraph: {
      ...openGraph,
      images: omitOpenGraphImage ? undefined : images,
    },
  }
}
