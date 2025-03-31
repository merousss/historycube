import { BaseModelOptions, DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
	color?: string;	// border color
	image?: string; // node icon | image
	id?: string;	// node id for calculations
	inPort?: string; // inPort position
	outPort?: string; // outPort position
  cost?: number; // upgrade cost
	require?: any; 
	active?: boolean;
}

export class TSCustomNodeModel extends NodeModel {
	color: string;
	image: string;
	id: string;
	inPort: string;
	outPort: string;
	cost: number;
	require: any;
	active: boolean;

	constructor(options: TSCustomNodeModelOptions = {}) {
		super({
			...options,
			type: 'ts-custom-node'
		});
		this.color = options.color || '#ac1c03';
		this.image = options.image || '';
		this.id = options.id || "";
		this.inPort = options.inPort || "bottom";
		this.outPort = options.outPort || "top";
		this.cost = options.cost || 1;
		this.require = options.require || ["prev"];
		this.active = options.active || false;

		// setup an in and out port
		this.addPort(
			new DefaultPortModel({
				in: true,
				name: 'in'
			})
		);
		this.addPort(
			new DefaultPortModel({
				in: false,
				name: 'out'
			})
		);
	}

	serialize() {
		return {
			...super.serialize(),
			color: this.color,
			image: this.image,
			id: this.id,
			inPort: this.inPort,
			outPort: this.outPort,
			cost: this.cost,
      require: this.require,
			active: this.active,
		};
	}

	deserialize(event): void {
		super.deserialize(event);
		this.color = event.data.color;
		this.image = event.data.image;
		this.id = event.data.id;
		this.inPort = event.data.inPort;
		this.outPort = event.data.outPort;
		this.cost = event.data.cost;
		this.require = event.data.require;
		this.active = event.data.active;
	}
}