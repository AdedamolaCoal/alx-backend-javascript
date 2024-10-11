export interface MajorCredits {
	credits: number;
	_majorCredits: "majorCredits";
}

export interface MinorCredits {
	credits: number;
	_minorCredits: "minorCredits";
}

function sumMajorCredits(
	subject1: MajorCredits,
	subject2: MinorCredits
): MajorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		_majorCredits: "majorCredits",
	};
}

function sumMinorCredits(
	subject1: MinorCredits,
	subject2: MajorCredits
): MinorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		_minorCredits: "minorCredits",
	};
}

console.log(
	sumMajorCredits(
		{
			credits: 25,
			_majorCredits: "majorCredits",
		},
		{ credits: 35, _minorCredits: "minorCredits" }
	)
);
console.log(
	sumMinorCredits(
		{
			credits: 25,
			_minorCredits: "minorCredits",
		},
		{ credits: 35, _majorCredits: "majorCredits" }
	)
);
