import { TSCustomNodeModel } from '../Models/CustomNode/TSCustomNodeModel';
import { DefaultLinkModel} from '@projectstorm/react-diagrams';

import Icon from "../../../images/vitality.png"
export function AgilityNodes(model: any){

  
  const node1 = new TSCustomNodeModel({image: Icon});
  const node2 = new TSCustomNodeModel({image: Icon});

  node2.setPosition(800, 50);
  node1.setPosition(1000, 300);


  const link1 = new DefaultLinkModel();
  link1.setSourcePort(node1.getPort('out'));
  link1.setTargetPort(node2.getPort('in'));
  
  model.addAll(node1, node2, link1);

  return console.info("Loaded Agility Nodes")
}