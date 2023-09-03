import React from 'react'
import { PointType } from '../interfaces/AllInterface'
import { Viewer, Entity, Scene, Camera, CameraFlyTo, CesiumComponentRef } from "resium";
import { Viewer as CViewer, SceneMode, viewerCesium3DTilesInspectorMixin, CesiumWidget, Cartesian3 } from "cesium";

const Point: React.FC<{ points: PointType[] }> = ({ points }) => {
    return (
        <div>
            {
                points.map((point, index) =>
                    <Entity
                        name="test"
                        description="test!!"
                        position={Cartesian3.fromDegrees(point.lng, point.lat, 1000)}
                        point={{ pixelSize: 10 }}
                    />
                   
                )
            }
        </div>
    )
}

export default Point