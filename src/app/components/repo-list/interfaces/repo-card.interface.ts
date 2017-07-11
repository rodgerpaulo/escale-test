export interface RepositoryCardInterface {
    name: string;
    full_name: string;
    language: string;
    language_url: string;
    description: string;
    stargazers_count: number;
    open_issues_count: number;
    created_at: string;
    pushed_at: string;
    owner: Owner;
    html_url: string;
}

interface Owner {
    avatar_url: string;
    html_url: string;
    login: string;
}
