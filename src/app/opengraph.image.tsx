import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Description of the image'
export const size = {
  width: 800,
  height: 600,
}
export const contentType = 'image/jpeg'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="../../assets/thumbnail.jpg" alt={alt} />
      </div>
    ),
    {
      ...size,
    }
  )
}