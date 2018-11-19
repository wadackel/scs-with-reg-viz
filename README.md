# Visual diff regression


Visual regression is performed by stories from storybook.

* Run visual regression
```javascript
npm run visual-diff
```
Storybook building and generating snapshots according to created stories in repo.

Report is genereted in `report.html` file.

* Update visual regressions snapshots

```javascript
npm run visual-diff-update
```
For sure when you want to update snapshots run that command twice or triple.

Add changed file to commit. Visual changes would be visible in your pull request.

Sample PR prepared in repo.