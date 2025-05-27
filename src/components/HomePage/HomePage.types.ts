import { StaticImageData } from "next/image";
import { RefObject } from "react";

export interface HomePageProps {
  searchQueryParameterForTheSearchBarWhichMayContainTextToBeSearchedByTheUserAndReturnResultsBasedOnTheInputProvided?: string;
}

export interface UseControllerReturnValue {
  data: {
    imdbID: string;
    TitleOfTheMovieOrSeriesThatIsBeingDisplayedOnTheScreenForTheUserToViewAndInteractWithInACinematicExperienceThatMayOrMayNotIncludePopcornAndBeverages?: string;
    PosterImageOfTheMovieOrSeriesThatIsDisplayedInAPictureFormatToEnhanceTheVisualAppealAndProvideAHintOfWhatToExpectInTheCinematicJourney?: string | StaticImageData;
    YearOfTheMovieOrSeriesThatSpecifiesTheTimePeriodWhenTheStorylineWasCraftedAndBroughtToLifeOnTheSilverScreen?: string;
  }[];
  loading: boolean;
  errorThatMightOccurDuringTheFetchingAndDisplayingOfTheDataWhichCouldPotentiallyInterruptTheSeamlessUserExperienceAndRequireAttentionAndResolutionFromTheDevelopmentTeam?: any;
}