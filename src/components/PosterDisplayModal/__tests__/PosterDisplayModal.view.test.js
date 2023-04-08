import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { PLACEHOLDER_POSTER_URL } from '@/common/constants';
import PosterDisplayModalView from '../PosterDisplayModal.view';

jest.mock("next/image", () => jest.fn(({ src }) => <>{src}</>))

describe("PosterDisplayModal.view", () => {
  it("should display image correctly", () => {
    render(<PosterDisplayModalView img="test.jpg"/>)

    expect(screen.getByText(/test.jpg/i)).toBeVisible();
  });

  it("should display placeholder if no image are shown", () => {
      render(<PosterDisplayModalView/>)

      expect(screen.getByText(PLACEHOLDER_POSTER_URL )).toBeVisible();
  })
});