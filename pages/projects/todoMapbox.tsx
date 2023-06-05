'use-client'
import mapboxgl, { Map } from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"
import { useEffect, useRef, useState } from 'react'

function TodoMapbox() {
  const mapContainer = useRef<any>(null)
  const map = useRef<Map | null>(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    mapboxgl.accessToken =
      'pk.eyJ1IjoicmV4Y29kZSIsImEiOiJjbGlkeXpkemYwNW14M2VwZGR2MmFtajVsIn0.mQhPfsEkepCYErr4-lFnrg'
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [15.4542, 18.7322], // center map on Chad
      zoom: 1.8
    })

    console.log('hello')
  }, [])

  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      if (!map.current) return
      else {
        setLng(map.current?.getCenter().lng.toFixed(4))
        setLat(map.current?.getCenter().lat.toFixed(4))
        setZoom(map.current?.getZoom().toFixed(2))
      }

      console.log('lng', lng)
      console.log('lat', lat)
      console.log('zoom', zoom)
    })
  }, [map.current])

  return (
    <div className='relative h-screen w-screen'>
      <div className='absolute top-0 left-0 bg-black text-white z-10'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className='h-full w-full bg-slate-500' />
    </div>
  )
}

export default TodoMapbox
