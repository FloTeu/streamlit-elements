import React from "react"
import { Global } from "@emotion/react"
import { Responsive, WidthProvider } from "react-grid-layout"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const ResponsiveGridLayout = WidthProvider(Responsive)
const GridPlaceholderStyle = <Global styles={{
  ".react-grid-item.react-grid-placeholder": {
    background: "transparent !important",
    border: "thin dashed grey !important",
    opacity: ".9 !important",
  }
}}/>

const Grid = ({ children, ...props }: ElementsDashboardGridProps) => (
  <>
    {GridPlaceholderStyle}
    <ResponsiveGridLayout {...props}>
      {[children].flat().map(child => {
        if (React.isValidElement(child) && child.key !== undefined) {
          // Create a new style object with the desired properties
          const newStyle = {
            ...child.props.style,
            height: "100%",
            width: "100%",
            boxSizing: "border-box",
          }

          // Return a cloned element with the new style
          return (
            <div key={child.key}>
              {React.cloneElement(child, { style: newStyle })}
            </div>
          )
        } else {
          return child
        }
      })}
    </ResponsiveGridLayout>
  </>
)

const elements: ElementsRecord = { Grid }
const loadGrid: ElementsLoader = element => elements[element]

export default loadGrid
