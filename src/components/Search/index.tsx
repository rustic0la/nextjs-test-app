import { FC, HTMLAttributes, useState } from 'react';
import { DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './Search.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import SearchIcon from './search.svg';
import { useRouter } from 'next/router';

export interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Search: FC<SearchProps> = ({ className, ...props }) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        g: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        placeholder="Search..."
        value={search}
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button appearance="primary" className={styles.button} onClick={goToSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};
