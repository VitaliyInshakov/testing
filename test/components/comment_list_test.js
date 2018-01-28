import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = { comments: ['asdf', 'new comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows a LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment thas is provided', () => {
    expect(component).to.contain('asdf');
    expect(component).to.contain('new comment');
  });
});