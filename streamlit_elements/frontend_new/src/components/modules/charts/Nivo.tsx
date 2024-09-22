import dynamic from "next/dynamic"
import ElementsLoading from "../../ElementsLoading"

const elements: ElementsRecord = {
  AreaBump: dynamic(() => import("@nivo/bump").then(m => m.ResponsiveAreaBump), { loading: ElementsLoading, ssr: false }),
  Bar: dynamic(() => import("@nivo/bar").then(m => m.ResponsiveBar), { loading: ElementsLoading, ssr: false }),
  BarCanvas: dynamic(() => import("@nivo/bar").then(m => m.ResponsiveBarCanvas), { loading: ElementsLoading, ssr: false }),
  Bullet: dynamic(() => import("@nivo/bullet").then(m => m.ResponsiveBullet), { loading: ElementsLoading, ssr: false }),
  Bump: dynamic(() => import("@nivo/bump").then(m => m.ResponsiveBump), { loading: ElementsLoading, ssr: false }),
  Calendar: dynamic(() => import("@nivo/calendar").then(m => m.ResponsiveCalendar), { loading: ElementsLoading, ssr: false }),
  CalendarCanvas: dynamic(() => import("@nivo/calendar").then(m => m.ResponsiveCalendarCanvas), { loading: ElementsLoading, ssr: false }),
  Chord: dynamic(() => import("@nivo/chord").then(m => m.ResponsiveChord), { loading: ElementsLoading, ssr: false }),
  ChordCanvas: dynamic(() => import("@nivo/chord").then(m => m.ResponsiveChordCanvas), { loading: ElementsLoading, ssr: false }),
  Chroropleth: dynamic(() => import("@nivo/geo").then(m => m.ResponsiveChoropleth), { loading: ElementsLoading, ssr: false }),
  ChroroplethCanvas: dynamic(() => import("@nivo/geo").then(m => m.ResponsiveChoroplethCanvas), { loading: ElementsLoading, ssr: false }),
  CirclePacking: dynamic(() => import("@nivo/circle-packing").then(m => m.ResponsiveCirclePacking), { loading: ElementsLoading, ssr: false }),
  CirclePackingCanvas: dynamic(() => import("@nivo/circle-packing").then(m => m.ResponsiveCirclePackingCanvas), { loading: ElementsLoading, ssr: false }),
  CirclePackingHtml: dynamic(() => import("@nivo/circle-packing").then(m => m.ResponsiveCirclePackingHtml), { loading: ElementsLoading, ssr: false }),
  Funnel: dynamic(() => import("@nivo/funnel").then(m => m.ResponsiveFunnel), { loading: ElementsLoading, ssr: false }),
  GeoMap: dynamic(() => import("@nivo/geo").then(m => m.ResponsiveGeoMap), { loading: ElementsLoading, ssr: false }),
  GeoMapCanvas: dynamic(() => import("@nivo/geo").then(m => m.ResponsiveGeoMapCanvas), { loading: ElementsLoading, ssr: false }),
  HeatMap: dynamic(() => import("@nivo/heatmap").then(m => m.ResponsiveHeatMap), { loading: ElementsLoading, ssr: false }),
  HeatMapCanvas: dynamic(() => import("@nivo/heatmap").then(m => m.ResponsiveHeatMapCanvas), { loading: ElementsLoading, ssr: false }),
  Line: dynamic(() => import("@nivo/line").then(m => m.ResponsiveLine), { loading: ElementsLoading, ssr: false }),
  LineCanvas: dynamic(() => import("@nivo/line").then(m => m.ResponsiveLineCanvas), { loading: ElementsLoading, ssr: false }),
  Marimekko: dynamic(() => import("@nivo/marimekko").then(m => m.ResponsiveMarimekko), { loading: ElementsLoading, ssr: false }),
  Network: dynamic(() => import("@nivo/network").then(m => m.ResponsiveNetwork), { loading: ElementsLoading, ssr: false }),
  NetworkCanvas: dynamic(() => import("@nivo/network").then(m => m.ResponsiveNetworkCanvas), { loading: ElementsLoading, ssr: false }),
  ParallelCoordinates: dynamic(() => import("@nivo/parallel-coordinates").then(m => m.ResponsiveParallelCoordinates), { loading: ElementsLoading, ssr: false }),
  ParallelCoordinatesCanvas: dynamic(() => import("@nivo/parallel-coordinates").then(m => m.ResponsiveParallelCoordinatesCanvas), { loading: ElementsLoading, ssr: false }),
  Pie: dynamic(() => import("@nivo/pie").then(m => m.ResponsivePie), { loading: ElementsLoading, ssr: false }),
  PieCanvas: dynamic(() => import("@nivo/pie").then(m => m.ResponsivePieCanvas), { loading: ElementsLoading, ssr: false }),
  Radar: dynamic(() => import("@nivo/radar").then(m => m.ResponsiveRadar), { loading: ElementsLoading, ssr: false }),
  RadialBar: dynamic(() => import("@nivo/radial-bar").then(m => m.ResponsiveRadialBar), { loading: ElementsLoading, ssr: false }),
  Sankey: dynamic(() => import("@nivo/sankey").then(m => m.ResponsiveSankey), { loading: ElementsLoading, ssr: false }),
  ScatterPlot: dynamic(() => import("@nivo/scatterplot").then(m => m.ResponsiveScatterPlot), { loading: ElementsLoading, ssr: false }),
  ScatterPlotCanvas: dynamic(() => import("@nivo/scatterplot").then(m => m.ResponsiveScatterPlotCanvas), { loading: ElementsLoading, ssr: false }),
  Stream: dynamic(() => import("@nivo/stream").then(m => m.ResponsiveStream), { loading: ElementsLoading, ssr: false }),
  Sunburst: dynamic(() => import("@nivo/sunburst").then(m => m.ResponsiveSunburst), { loading: ElementsLoading, ssr: false }),
  SwarmPlot: dynamic(() => import("@nivo/swarmplot").then(m => m.ResponsiveSwarmPlot), { loading: ElementsLoading, ssr: false }),
  SwarmPlotCanvas: dynamic(() => import("@nivo/swarmplot").then(m => m.ResponsiveSwarmPlotCanvas), { loading: ElementsLoading, ssr: false }),
  TimeRange: dynamic(() => import("@nivo/calendar").then(m => m.ResponsiveTimeRange), { loading: ElementsLoading, ssr: false }),
  TreeMap: dynamic(() => import("@nivo/treemap").then(m => m.ResponsiveTreeMap), { loading: ElementsLoading, ssr: false }),
  TreeMapCanvas: dynamic(() => import("@nivo/treemap").then(m => m.ResponsiveTreeMapCanvas), { loading: ElementsLoading, ssr: false }),
  TreeMapHtml: dynamic(() => import("@nivo/treemap").then(m => m.ResponsiveTreeMapHtml), { loading: ElementsLoading, ssr: false }),
  Voronoi: dynamic(() => import("@nivo/voronoi").then(m => m.ResponsiveVoronoi), { loading: ElementsLoading, ssr: false }),
  Waffle: dynamic(() => import("@nivo/waffle").then(m => m.ResponsiveWaffle), { loading: ElementsLoading, ssr: false }),
  WaffleCanvas: dynamic(() => import("@nivo/waffle").then(m => m.ResponsiveWaffleCanvas), { loading: ElementsLoading, ssr: false }),
  WaffleHtml: dynamic(() => import("@nivo/waffle").then(m => m.ResponsiveWaffleHtml), { loading: ElementsLoading, ssr: false }),
}

const loadNivo: ElementsLoader = element => elements[element]

export default loadNivo
