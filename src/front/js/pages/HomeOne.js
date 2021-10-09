import React from "react";
import { SliderData } from "../component/data/SliderData";
import { Hero } from "../component/Hero";
import PropTypes from "prop-types";
import { InfoData, InfoDataTwo } from "../component/data/infoData";
import { InfoSection } from "../component/InfoSection";
import { Listing } from "../component/Listing";
import { Features } from "../component/Features";
import { FormContact } from "../component/FormContact";

export const HomeOne = () => {
	return (
		<div>
			<Hero slides={SliderData} />
			<InfoSection {...InfoData} />
			<Listing />
			<Features />
			<InfoSection {...InfoDataTwo} />
			<FormContact />
		</div>
	);
};
