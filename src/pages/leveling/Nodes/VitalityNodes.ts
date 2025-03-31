import { TSCustomNodeModel } from '../Models/CustomNode/TSCustomNodeModel';
import { DefaultLinkModel} from '@projectstorm/react-diagrams';

import Icon from "../../../images/vitality.png"
import Heart from "../../../images/nodes/heart.png"
import Armor1 from "../../../images/nodes/lether_armor.png"


const curv = {
  left: -40,
  right: 40,
  straight: 0
}

const y_axis = 300
const active = {color: "green"}

const State = (curvyness) => {

  return({color: "gray", curvyness: curv[curvyness]})
}
export function VitalityNodes(model: any, levels){


  //!-------------------------------Declare nodes-------------------------------!//
  const node1 = new TSCustomNodeModel({image: Icon, id: "v1", require: null, active: true, color: "#f0cc05"});
  const node2 = new TSCustomNodeModel({image: Heart, id: "v2", cost: 2, active: true});
  const node3 = new TSCustomNodeModel({image: Armor1, id: "v3", cost: 2, active: true});
  const node4 = new TSCustomNodeModel({image: Heart, id: "v4", cost: 3});
  const node5 = new TSCustomNodeModel({image: Icon, id: "v5", });
  const node6 = new TSCustomNodeModel({image: Armor1, id: "v6", outPort: "bottom", require: ["v4"], cost: 5});
  const node7 = new TSCustomNodeModel({image: Icon, id: "v7", inPort: "top", });
  


  
  //!------------------------Declare nodes positions---------------------------!//
  node1.setPosition(226.25, y_axis+963.75);
  node2.setPosition(138.75, y_axis+762.5);
  node3.setPosition(226.25, y_axis+552.25);
  node4.setPosition(226.25, y_axis+400);
  node5.setPosition(106.25, y_axis+200);
  node6.setPosition(346.25, y_axis+200);
  node7.setPosition(530.25, y_axis+484);



  //!------------------------------Declare links-------------------------------!//
  const link1 = new DefaultLinkModel(State("left"));
  const link2 = new DefaultLinkModel(State("right"));
  const link3 = new DefaultLinkModel(State("straight"));
  const link4 = new DefaultLinkModel(State("left"));
  const link5 = new DefaultLinkModel(State("right"));
  const link6 = new DefaultLinkModel(State("left"));



  //!--------------------------Declare links ports----------------------------!//
  link1.setSourcePort(node1.getPort('out'));
  link1.setTargetPort(node2.getPort('in'));

  link2.setSourcePort(node2.getPort('out'));
  link2.setTargetPort(node3.getPort('in'));

  link3.setSourcePort(node3.getPort('out'));
  link3.setTargetPort(node4.getPort('in'));

  link4.setSourcePort(node4.getPort('out'));
  link4.setTargetPort(node5.getPort('in'));

  link5.setSourcePort(node4.getPort('out'));
  link5.setTargetPort(node6.getPort('in'));

  link6.setSourcePort(node6.getPort('out'));
  link6.setTargetPort(node7.getPort('in'));
  


  model.addAll(
    node1, node2, node3, node4, node5, node6, node7,
    link1, link2, link3, link4, link5, link6,
  );
  
  return console.info("Loaded Vitality Nodes")

  
}

