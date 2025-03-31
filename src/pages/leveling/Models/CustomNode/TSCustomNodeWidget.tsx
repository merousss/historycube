import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams';
import { TSCustomNodeModel } from './TSCustomNodeModel';
import { Whisper } from 'rsuite';
import { motion } from 'framer-motion';

import { NodePopover } from './NodesPopovers';

export interface TSCustomNodeWidgetProps {
	node: TSCustomNodeModel;
	engine: DiagramEngine;
}

export interface TSCustomNodeWidgetState {}

export class TSCustomNodeWidget extends React.Component<TSCustomNodeWidgetProps, TSCustomNodeWidgetState> {
	constructor(props: TSCustomNodeWidgetProps) {
		super(props);
		this.state = {};
	}


	render() {
		return (
			<>
			{/* <Whisper placement="bottom" trigger="hover" speaker={NodePopover(this.props.node.getID(), "")} delayOpen={500}> */}
				<motion.div className="custom-node" whileHover={{scale: 1.05}}
					onClick={()=>console.info(this.props.node.getPosition())}
					style={this.style()}
				>
					<div className="node-cost">{this.props.node.cost}</div>
					<PortWidget engine={this.props.engine} port={this.props.node.getPort('in')}
						style={definePort(this.props.node.inPort)}
					>
					</PortWidget>

					<PortWidget engine={this.props.engine} port={this.props.node.getPort('out')}
						style={definePort(this.props.node.outPort)}
					>
					</PortWidget>

					<img src={this.props.node.image} style={{width: 100, height: 100, borderRadius: 90}} alt="icon"/>
				</motion.div>
				<p>{this.props.node.getID()}</p>
				
			{/* </Whisper> */}
			</>
		);
	}
	public style(){
		

		return this.props.node.active ? {border: `solid 6px ${this.props.node.color}`} 
		: {filter: "brightness(30%)", border: `solid 6px ${this.props.node.color}`}
	}
}

const definePort=(placement)=>{
	switch(placement){
		case 'top':
			return {left: 50, top: -2, position: "absolute"}
		case 'bottom':
			return {left: 50, bottom: -2, position: "absolute"}
		case 'left':
			return {left: -2, bottom: 50, position: "absolute"}
		case 'right':
			return {right: -2, bottom: 50, position: "absolute"}
	}
}


