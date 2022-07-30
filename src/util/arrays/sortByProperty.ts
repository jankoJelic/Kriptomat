interface Props {
  array: any[];
  property: string;
  ascending: boolean;
}

const sortByProperty = ({
  array = [],
  property = 'name',
  ascending = true,
}: Props) =>
  array.sort((a, b) => {
    if (ascending) {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  });

export default sortByProperty;
