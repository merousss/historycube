import createEngine, { DiagramModel} from '@projectstorm/react-diagrams';
import * as React from 'react';
import { CanvasWidget, ZoomCanvasAction } from '@projectstorm/react-canvas-core';

import { TSCustomNodeFactory } from './Models/CustomNode/TSCustomNodeFactory';

import "./styles.css"

import { VitalityNodes } from './Nodes/VitalityNodes';
import { AgilityNodes } from './Nodes/AgilityNodes';

const generateEngine = () => {
  const engine = createEngine({ registerDefaultZoomCanvasAction: false })
  engine
    .getActionEventBus()
    .registerAction(new ZoomCanvasAction({ inverseZoom: true }))
  return engine
}

export default function MainCanvas(levels){



  const engine = generateEngine();
  engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());
  const model = new DiagramModel();

  VitalityNodes(model, levels.vitality)
  AgilityNodes(model)

  engine.setModel(model);

  // model.setLocked(true);

  model.setZoomLevel(50)

  return(
      <CanvasWidget engine={engine} className="canvas-diagram"/>
  );

}
