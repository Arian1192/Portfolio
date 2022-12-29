export interface IGithubRepo {

        id: number
        name: string
        description: string
        html_url: string
        language: string
        stargazers_count: number
        forks_count: number

}

export const getReposFromGithub = async (username:string) => {
	const response = await fetch(`https://api.github.com/users/${username}/repos`)
	const data:IGithubRepo[] = await response.json()
    
	const filteredData = data.filter(repo => repo.name !== 'Arian1192')
	const refilteredData = filteredData.filter(
		repo => repo.name !== 'MarcadorPadel'
	)

	return refilteredData
}

