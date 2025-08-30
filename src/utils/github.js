const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'; // Replace with your GitHub username

export const fetchGitHubContributions = async () => {
  try {
    // Get current year and format date range
    const now = new Date();
    const currentYear = now.getFullYear();
    const fromDate = `${currentYear}-01-01`;
    const toDate = now.toISOString().split('T')[0];

    // GitHub GraphQL query
    const query = `
      query userContributions($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    // Make the API request
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          username: GITHUB_USERNAME,
          from: fromDate,
          to: toDate,
        },
      }),
    });

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const contributions = data.data.user.contributionsCollection.contributionCalendar;
    
    // Format the data for our component
    return {
      total: `${contributions.totalContributions} contributions in ${currentYear}`,
      data: contributions.weeks.map(week => 
        week.contributionDays.map(day => ({
          count: day.contributionCount,
          date: day.date,
        }))
      ),
    };
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return {
      total: '0 contributions in 2024',
      data: [],
    };
  }
}; 