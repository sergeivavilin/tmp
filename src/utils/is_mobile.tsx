'use client'

// const isMobile = () => {
// 	if (window && window.innerWidth < 768) {
// 		return true;
// 	}
// 	return false;
// }

const isMobile = () => {
	if (typeof window !== 'undefined') {
		return window.innerWidth < 768;
	}
	return false;
};

export default isMobile;