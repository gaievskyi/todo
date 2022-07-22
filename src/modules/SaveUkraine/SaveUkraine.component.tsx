import Ukraine, { IUkraineOptions } from 'save-ukraine'

export function SaveUkraine(props: Partial<Omit<IUkraineOptions, 'element'>>) {
  return (
    <div
      ref={(element) => {
        if (element) {
          Ukraine.save({
            element,
            moreInfoUrl: 'https://u24.gov.ua/',
            ribbon: 'BOTTOM_RIGHT',
            ...props
          })
        }
      }}
    />
  )
}
