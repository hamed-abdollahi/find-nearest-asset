import { useState, useEffect, useRef } from "react"
import { Viewer, CesiumComponentRef } from "resium";
import {
  Viewer as CViewer, SceneMode, Cartesian3, Color,
  PinBuilder, HeightReference, VerticalOrigin , Math as _Math} from "cesium";
import "../components/Viewerc.css"
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";
import EntityCollection from "cesium/Source/DataSources/EntityCollection";
import BaseLayerPickerViewModel from "cesium/Source/Widgets/BaseLayerPicker/BaseLayerPickerViewModel";
import { PointType } from "../interfaces/AllInterface";


const Viewerc = () => {
  const ref = useRef<CesiumComponentRef<CViewer>>(null);
  const [mode, setMode] = useState<SceneMode>(2)
  const [btn3d, setBtn3d] = useState<string>("3D")
  const [pointlist, setPointlist] = useState<PointType[]>([])
  const dispatch = useDispatch();
  const { showDetail, showEdge, setViewer } = bindActionCreators(actionCreators, dispatch);
  const points = useSelector((state: State) => state.points)
  const viewer = useSelector((state: State) => state.viewer)
  const center = Cartesian3.fromDegrees(53.43333, 36.94544, 10000000)

  

  useEffect(() => {
    //setViewer(ref)
    let bl: BaseLayerPickerViewModel = ref.current?.cesiumElement?.baseLayerPicker.viewModel!
    bl.selectedImagery = bl.imageryProviderViewModels[6];
    ref.current?.cesiumElement?.entities.removeAll();
    ref.current?.cesiumElement?.camera.lookLeft()
    fitBounds()
  });

  const setEvent =()=> {
    ref.current?.cesiumElement?.camera.changed.addEventListener(function() {
      var deg = Math.round( _Math.toDegrees(ref.current?.cesiumElement?.camera.heading!))
      console.log('Heading:', deg)
    
      var deg = Math.round( _Math.toDegrees(ref.current?.cesiumElement?.camera.pitch!))
      console.log('Pitch:', deg)
    })
  }
  const fitBounds = () => {
    let promises = points.map((point, index) => {
      ref.current?.cesiumElement?.entities.add({
        position: Cartesian3.fromDegrees(point.lng, point.lat, 0),
        billboard: {
          image: (new PinBuilder()).fromText((index + 1).toString(), Color.GREEN, 48),
          heightReference: HeightReference.CLAMP_TO_GROUND,
          verticalOrigin: VerticalOrigin.BOTTOM
        }
      })
    })


    Promise.all(promises).then(function (results) {
      let en: EntityCollection = ref.current?.cesiumElement?.entities!;
      ref.current?.cesiumElement?.flyTo(en).then(function () {
        setViewer(ref)
      });
    })

    setEvent()
  }




  return (

    <div>
      <Viewer
        ref={ref}
        full
        requestRenderMode={false}
        maximumRenderTimeChange={Infinity}
        animation={false}
        homeButton={false}
        navigationHelpButton={false}
        sceneMode={SceneMode.SCENE3D}  
      >

      </Viewer >
    </div>

  );
}

export default Viewerc;


// {
//   points.map((point, index) =>
//     <Entity
//       key={index}
//       name="test"
//       description="test!!"
//       position={Cartesian3.fromDegrees(point.lng, point.lat, 0)}
//       billboard={{
//         image: (new PinBuilder()).fromText((index + 1).toString(), Color.GREEN, 48),
//         heightReference: HeightReference.CLAMP_TO_GROUND,
//         verticalOrigin: VerticalOrigin.BOTTOM
//       }}

//     />
//   )
// }
